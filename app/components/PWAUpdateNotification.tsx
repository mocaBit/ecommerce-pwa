import { usePWA } from '~/hooks/usePWA';

export function PWAUpdateNotification() {
  const { needRefresh, offlineReady, close, reload } = usePWA();

  if (!needRefresh && !offlineReady) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            {offlineReady && (
              <div>
                <h3 className="font-semibold text-gray-900">
                  App ready to use offline
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  You can now use the app without an internet connection.
                </p>
              </div>
            )}
            {needRefresh && (
              <div>
                <h3 className="font-semibold text-gray-900">
                  New version available
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  There is a new version of the app available.
                </p>
              </div>
            )}
          </div>
          <button
            onClick={close}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Cerrar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="mt-4 flex gap-2">
          {needRefresh && (
            <button
              onClick={reload}
              className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
            >
              Update now
            </button>
          )}
          <button
            onClick={close}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            {needRefresh ? 'Later' : 'Understood'}
          </button>
        </div>
      </div>
    </div>
  );
}
