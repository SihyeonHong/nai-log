import Button from "@/components/Button";
import Divider from "@/components/Divider";

export default function Tester() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello!</h1>
      <p className="p-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="p-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p style={{ color: "#A6808C" }}>inline style</p>

      <Button fullWidth>Full Width Button</Button>
      <Divider direction="horizontal" />

      <Divider direction="vertical" className="h-20 w-1" />
      <div className="mt-4 flex flex-col gap-4">
        <div className="flex gap-4">
          <Button variant="primary" size="sm">
            Primary SM
          </Button>
          <Button variant="primary" size="md">
            Primary MD
          </Button>
          <Button variant="primary" size="lg">
            Primary LG
          </Button>
        </div>
        <div className="space-x-4">
          <Button variant="secondary" size="sm">
            Secondary SM
          </Button>
          <Button variant="secondary" size="md">
            Secondary MD
          </Button>
          <Button variant="secondary" size="lg">
            Secondary LG
          </Button>
        </div>
      </div>
    </>
  );
}
