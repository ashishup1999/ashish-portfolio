import { IMAGES } from "@/constants/StaticImages";
import ScreenSizeProvider from "@/contexts/SizeProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/x-icon" href={IMAGES.coderDoodle.src} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{`Ashish's Portfolio`}</title>
      <body>
        <ScreenSizeProvider>{children}</ScreenSizeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

// public\images\coder_guy.svg