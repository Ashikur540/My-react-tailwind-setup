import { RouterProvider } from "react-router"
import router from "./Routes/routes.config"

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}