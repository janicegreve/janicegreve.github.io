import { useTranslation } from 'react-i18next';
import { Transition } from '@headlessui/react';
import { RefreshCw, Sparkles } from 'lucide-react';
import clsx from 'clsx';
import { useUpdateCheck } from '../hooks/useUpdateCheck';

export const UpdateNotification = () => {
  const { updateAvailable, refresh } = useUpdateCheck();
  const { t } = useTranslation();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-6">
      <Transition
        show={updateAvailable}
        enter="transform transition duration-500 ease-out"
        enterFrom="translate-y-20 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition duration-300 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className={clsx(
          "pointer-events-auto flex items-center gap-x-4 rounded-xl",
          "bg-indigo-600 px-4 py-3 shadow-lg ring-1 ring-white/20"
        )}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
            <Sparkles size={18} />
          </div>

          <p className="text-sm font-medium text-white">
            {t('updateNotification.newVersion')}
          </p>

          <button
            onClick={refresh}
            className={clsx(
              "flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold",
              "text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
            )}
          >
            <RefreshCw size={14} className="animate-spin-slow" />
            {t('updateNotification.refresh')}
          </button>
        </div>
      </Transition>
    </div>
  );
}
