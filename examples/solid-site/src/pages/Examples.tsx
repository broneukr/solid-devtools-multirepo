import { createTabList, Repl } from 'solid-repl';
import { NavLink, useRouteData, useParams } from 'solid-app-router';
import { For, Component, createSignal, createEffect, batch, ErrorBoundary } from 'solid-js';
import { ExamplesDataRoute } from './Examples.data';

import { compiler, formatter } from '../components/setupRepl';
import { useI18n } from '@solid-primitives/i18n';
import { useRouteReadyState } from '../utils/routeReadyState';
import { useAppContext } from '../AppContext';

const Examples: Component = () => {
  const data = useRouteData<ExamplesDataRoute>();
  const context = useAppContext();
  const [t] = useI18n();
  const params = useParams<{ id: string }>();
  const [tabs, setTabs] = createTabList([
    {
      name: 'main',
      type: 'tsx',
      source: '',
    },
  ]);
  const [current, setCurrent] = createSignal(`main.tsx`);
  const [version, setVersion] = createSignal<string | undefined>();

  useRouteReadyState();

  createEffect(async () => {
    createEffect(async () => {
      const exampleData = await fetch(`${location.origin}/examples/${params.id}.json`).then((r) =>
        r.json(),
      );
      batch(() => {
        const newTabs = exampleData.files.map(
          (file: { name: string; type?: string; content: string | string[] }) => {
            return {
              name: file.name,
              type: file.type || 'tsx',
              source: Array.isArray(file.content) ? file.content.join('\n') : file.content,
            };
          },
        );
        setTabs(newTabs);
        setCurrent(`${newTabs[0].name}.tsx`);
        setVersion(exampleData.version);
      });
    });
  });

  return (
    <div class="flex flex-col relative">
      <div class="container my-10 w-[98vw] mx-auto">
        <div class="md:grid md:grid-cols-12 gap-6">
          <div class="md:col-span-4 lg:col-span-3 overflow-auto border dark:border-solid-darkLighterBg p-5 rounded md:h-[82vh]">
            <For each={Object.entries(data.list)}>
              {([name, examples]) => (
                <>
                  <h3 class="text-xl text-solid-default dark:border-solid-darkLighterBg dark:text-solid-darkdefault border-b-2 font-semibold border-solid pb-2">
                    {t(`examples.${name.toLowerCase()}`, {}, name)}
                  </h3>
                  <div class="mb-10">
                    <For each={examples}>
                      {(example) => (
                        <NavLink
                          dir="ltr"
                          href={`/examples/${example.id}`}
                          class="block my-4 space-y-2 text-sm py-3 pl-2 border-b hover:opacity-60 dark:border-solid-darkLighterBg"
                          activeClass="text-solid-light dark:text-solid-darkdefault"
                        >
                          <span>{example.name}</span>
                          <span>{example.id === params.id}</span>
                          <span class="block text-gray-500 text-xs dark:text-white/40 text-md">
                            {example.description}
                          </span>
                        </NavLink>
                      )}
                    </For>
                  </div>
                </>
              )}
            </For>
          </div>

          <div
            dir="ltr"
            class="h-[82vh] rounded-lg md:col-span-8 lg:col-span-9 overflow-hidden shadow-2xl"
          >
            <ErrorBoundary
              fallback={
                <>
                  Repl failed to load. You may be using a browser that doesn't support Web Workers.
                </>
              }
            >
              <Repl
                compiler={compiler}
                formatter={formatter}
                isHorizontal={true}
                interactive={true}
                actionBar={true}
                editableTabs={true}
                dark={context.isDark}
                tabs={tabs()}
                setTabs={setTabs}
                current={current()}
                setCurrent={setCurrent}
                version={version()}
                id="examples"
              />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
