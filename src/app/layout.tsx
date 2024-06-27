"use client";
import "../styles/global.scss";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import MiniDrawer from "@/components/navbar/navbar";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import Footer from "@/components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();

  // Define the routes where MiniDrawer should not be displayed
  const excludedRoutes = [
    "/error-pages/error-404",
    "/error-pages/error-500",
    "/general-pages/blank-page",
  ];

  const showMiniDrawer = !excludedRoutes.includes(router);

  return (
    <html lang="en" className="root">
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <>
              {showMiniDrawer ? (
                <Box display="flex" sx={{ paddingY: "100px" }}>
                  <MiniDrawer />
                  {children}
                </Box>
              ) : (
                children
              )}
            </>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
