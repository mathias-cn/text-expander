import { TextExpander } from "./text-expander";

export function App() {
  const texts = [
    "React is a powerful JavaScript library used for building dynamic user interfaces. Developed and maintained by Facebook, React allows developers to create large web applications that can update and render efficiently in response to data changes.",
    "The core concept of React is the component. Components are independent, reusable pieces of UI that can be nested, managed, and handled separately. This modularity makes code more predictable and easier to debug.",
    "React uses a virtual DOM to optimize performance. Instead of directly manipulating the browser's DOM, React creates a virtual representation of the DOM and updates it in a more efficient way, minimizing the number of costly DOM operations.",
    "With the introduction of hooks in React 16.8, functional components can now manage state and side effects, making them as powerful as class components. Hooks like useState and useEffect simplify the component logic and make it more readable.",
    "React has a rich ecosystem that includes tools like React Router for navigation, Redux for state management, and Next.js for server-side rendering and static site generation. These tools help in building scalable and high-performance applications."
  ];
  
  
  return (
    <div className="space-y-4 p-4">
      <div>
        <p className="text-xl">Default</p>
          <TextExpander 
            text={texts[0]}
          />
      </div>
      
      <div>
        <p className="text-xl">No Underline</p>
          <TextExpander 
            text={texts[1]}
            underline={false}
          />
      </div>
      
      <div>
        <p className="text-xl">Custom closed Width</p>
          <TextExpander 
            text={texts[2]}
            collapsedWidth={100}
          />
      </div>
      
      <div>
        <p className="text-xl">Custom Classes and Button Text Color</p>
        <TextExpander 
          text={texts[3]}
          buttonTextColor="lime"
          className="bg-gray-800 text-white p-2 w-fit rounded-md border-gray-400 border-[1px]"
        />
      </div>
      
      <div>
        <p className="text-xl">Custom Button Texts, Classes and no Underline</p>
          <TextExpander 
            text={texts[4]}
            buttonText={{ open: "Show more text", close: "Show less text" }}
            underline={false}
            className="font-semibold text-xl"
          />
      </div>
    </div>
  )
}