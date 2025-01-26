'use client';

import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        color: 'inherit',
      },
    },
  },
});

const SiteToolbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // This ensures that the component is only rendered on the client
  useEffect(() => {
    setMounted(true); // After the component mounts, set mounted to true
  }, []);

  // Prevent rendering on the server to avoid hydration mismatch
  if (!mounted) {
    return null; // Return nothing until mounted on the client
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{ backgroundColor: "primary.main" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            GroupCode
          </Typography>
          <Button color="inherit" sx={{ marginLeft: "auto" }}>
            Problems
          </Button>
          {!session ? (
            <Button color="inherit" onClick={() => router.push("/login")}>
              Sign In
            </Button>
          ) : (
            <Button color="inherit" onClick={() => signOut()}>
              Sign Out {session.user?.name}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default SiteToolbar;