import { Button } from "./components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./components/ui/select"
import Editor from './components/global/Editor'

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

      <div className="flex gap-2 flex-col m-5 p-5 border rounded-md">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Editor value="" onChange={() => { }} />
      </div>
    </>
  )
}

export default App
