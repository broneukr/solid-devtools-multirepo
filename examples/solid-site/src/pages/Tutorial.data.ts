import { useI18n } from '@solid-primitives/i18n';
import { RouteDataFunc } from 'solid-app-router';
import { createResource } from 'solid-js';
import { getTutorial, getSupported, getTutorialDirectory } from '@solid.js/docs';
import { LessonLookup } from '@solid.js/docs/dist/src/types';

export interface Step {
  md: string;
  js: string;
}

export interface TutorialDirectoryItem {
  internalName: string;
  lessonName: string;
  description: string;
}

interface DataParams {
  lang: string;
  id?: string;
}

export type TutorialDirectory = TutorialDirectoryItem[];

async function fetchData({ lang, id }: DataParams) {
  if (!id) return {};

  const file = await getTutorial(lang, id);
  if (!file) return;
  // const javascript = `/tutorial/lessons/${lang}/${id}/lesson.json`;
  // const solved = `/tutorial/lessons/${lang}/${id}/solved.json`;
  return { markdown: file.markdown, javascript: file.lesson, solvedJs: file.solved };
}

async function fetchTutorialDirectory({ lang }: DataParams) {
  return (await getTutorialDirectory(lang)) || undefined;
}

const propogateUndefined = (
  strings: TemplateStringsArray,
  ...substitutions: (string | undefined)[]
) => {
  let out = '';
  for (let i = 0; i < substitutions.length; i++) {
    if (substitutions[i] === undefined) return undefined;
    out += strings[i] + substitutions[i];
  }
  return out + strings[strings.length - 1];
};

type JsFiles = {
  files: any[];
};

export interface TutorialRouteData {
  loading: boolean;
  markdown?: string;
  js?: JsFiles;
  solvedJs?: JsFiles;
  tutorialDirectory?: Record<string, TutorialDirectory>;
  tutorialDirectoryEntry?: TutorialDirectoryItem;
  nextUrl?: string;
  previousUrl?: string;
  nextLesson?: string;
  previousLesson?: string;
  id?: string;
  solved?: boolean;
}

export const TutorialData: RouteDataFunc = (props) => {
  const [, { locale }] = useI18n();
  const paramList = () => {
    let lang = locale();
    if (!getSupported('tutorials/introduction_basics', lang)) {
      lang = 'en';
    }
    return { lang, id: props.params.id || 'introduction_basics' };
  };
  const [directory] = createResource(paramList, fetchTutorialDirectory);
  const [data] = createResource(paramList, fetchData);
  return {
    get loading() {
      return data.loading;
    },
    get markdown() {
      return data()?.markdown;
    },
    get js() {
      return data()?.javascript;
    },
    get solvedJs() {
      return data()?.solvedJs;
    },
    get tutorialDirectory() {
      const data = directory();
      return (
        data &&
        data.reduce<Record<string, LessonLookup[]>>((sections, item) => {
          // Turns `Basics/Signal` into ['Basics', 'Signal']
          const [section, lessonName] = item.lessonName.split('/');
          // Create the section if it doesn't already exists
          if (!sections[section]) {
            sections[section] = [];
          }
          sections[section].push({ ...item, lessonName });
          return sections;
        }, {})
      );
    },
    get tutorialDirectoryEntry() {
      const data = directory();
      return data && data.find((el: any) => el.internalName === paramList().id);
    },
    get nextUrl() {
      const data = directory();
      return propogateUndefined`/tutorial/${
        data &&
        data[data.findIndex((el: any) => el.internalName === paramList().id) + 1]?.internalName
      }`;
    },
    get previousUrl() {
      const data = directory();
      return propogateUndefined`/tutorial/${
        data &&
        data[data.findIndex((el: any) => el.internalName === paramList().id) - 1]?.internalName
      }`;
    },
    get nextLesson() {
      const data = directory();
      return propogateUndefined`${
        data &&
        data[data.findIndex((el: any) => el.internalName === paramList().id) + 1]?.lessonName
      }`
        ?.split('/')
        .pop();
    },
    get previousLesson() {
      const data = directory();
      return propogateUndefined`${
        data &&
        data[data.findIndex((el: any) => el.internalName === paramList().id) - 1]?.lessonName
      }`
        ?.split('/')
        .pop();
    },
    get id() {
      return paramList().id;
    },
    get solved() {
      return Boolean(props.location.search.includes('solved'));
    },
  };
};
