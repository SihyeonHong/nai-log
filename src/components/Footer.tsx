export default function Footer() {
  return (
    <footer className="border-border bg-footer-background border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-muted flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Made with ❤️ by nai</span>
          </div>
          <p className="text-muted text-xs">
            © 2025 nai.log. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
