import { Button } from "./components/ui/button"

function App() {
  return (
    <>
      <h3 className='text-4xl text-red-500 text-center mt-14 font-bold'>
        Welcome To LicenseMarket UI Kit
      </h3>
      <div className="text-center space-y-2 mt-4">
        <p className="text-red-500 font-medium">
          A comprehensive UI component library for building modern web applications, powered by
          <Button variant="destructive" className="mx-1" size="xs">Shadcn</Button>
          and documented with
          <Button variant="destructive" className="mx-1" size="xs">Storybook</Button>
        </p>
        <p className="text-gray-600">
          Visit our
          <Button variant="link">
            documentation
          </Button>
          or explore our
          <Button variant="link">
            component library
          </Button>
        </p>
      </div>
    </>
  )
}

export default App
