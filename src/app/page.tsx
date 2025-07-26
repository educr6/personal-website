import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Eduardo Calderon
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            I&apos;m a software engineer from the Dominican Republic 🇩🇴
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-8">Connect with me</h2>
          <div className="flex justify-center space-x-8">
            {/* Twitter/X */}
            <a 
              href="https://x.com/eduardocalr" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-110"
              aria-label="Twitter/X"
            >
              <Image
                src="/icons/twitter.svg"
                alt="Twitter/X"
                width={32}
                height={32}
                className="text-white"
              />
              <span className="text-gray-300 text-sm font-medium">Twitter/X</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/eduardocr/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                className="text-white"
              />
              <span className="text-gray-300 text-sm font-medium">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/educr6" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={32}
                height={32}
                className="text-white"
              />
              <span className="text-gray-300 text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm">
            © 2025 Eduardo Calderon. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
