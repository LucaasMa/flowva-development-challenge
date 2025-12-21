import { createFileRoute } from '@tanstack/react-router'
import { Box, Typography } from '@mui/material'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 2,
      }}
    >
      <Typography variant="h3" component="h1">
        Welcome to Your App
      </Typography>
      <Typography variant="body1" color="text.secondary">
        TanStack Router + Material UI + React
      </Typography>
    </Box>
  )
}
