import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { Button } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";


import {userThemeChange} from "../redux/actions/userActions";

export default function Index() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.user.theme);
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }} >
          Material UI - Next.js example
        </Typography>

        <Typography variant="body2" component="h2" sx={{ mb: 2 }}>
          Current Theme: {currentTheme}
        </Typography>
        
        <Button variant="contained" color="primary"
          onClick={() => dispatch(userThemeChange('light'))}
          sx={{ m: 2 }}
        >
            Light Mode
          </Button>

          <Button variant="contained" color="primary"
          onClick={() => dispatch(userThemeChange('dark'))}
          sx={{ m: 2 }}
          >
            Dark Mode
          </Button>
          

        <br />

        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
