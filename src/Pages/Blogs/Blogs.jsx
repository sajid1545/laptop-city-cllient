import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
	return (
		<div>
			<Helmet>
				<title> Blogs - Laptop City </title>
			</Helmet>
			<div className="w-[75%] mx-auto flex justify-center mt-20">
				<div className="mx-auto w-full max-w-5xl rounded-2xl bg-white space-y-5">
					{/* Question - 1 */}
					<Disclosure as="div" className="mt-2">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span className="text-2xl font-bold">
										{' '}
										1: What are the different ways to manage a state in a React application?
									</span>
									<ChevronUpIcon
										className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-900">
									Every React component has a built-in state. This state is an object which stores
									the property values that belong to a component. State is able to keep data from
									different components in-sync because each state update re-renders all relevant
									components. The built-in way that React provides for setting component states is
									by using setState() and adding “local state” to a class. There are several other
									ways to manage state​s in React, including the use of: Hooks, React Context API
									Apollo Link State
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>

					{/* Question - 2 */}

					<Disclosure as="div" className="mt-2">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span className="text-2xl font-bold">
										{' '}
										2: How does prototypical inheritance work?
									</span>
									<ChevronUpIcon
										className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-900">
									Every object with its methods and properties contains an internal and hidden
									property known as [[Prototype]]. The Prototypal Inheritance is a feature in
									javascript used to add methods and properties in objects. It is a method by which
									an object can inherit the properties and methods of another object. Traditionally,
									in order to get and set the [[Prototype]] of an object, we use
									Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it
									is being set using __proto__.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>

					{/* Question - 3 */}
					<Disclosure as="div" className="mt-2">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span className="text-2xl font-bold">
										{' '}
										3: What is a unit test? Why should we write unit tests?
									</span>
									<ChevronUpIcon
										className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-900">
									Unit testing is a software development process in which the smallest testable
									parts of an application, called units, are individually and independently
									scrutinized for proper operation.The main objective of unit testing is to isolate
									written code to test and determine if it works as intended. Unit testing is an
									important step in the development process, because if done correctly, it can help
									detect early flaws in code which may be more difficult to find in later testing
									stages.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>

					{/* Question - 4 */}
					<Disclosure as="div" className="mt-2">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span className="text-2xl font-bold"> 4: React vs. Angular vs. Vue?</span>
									<ChevronUpIcon
										className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-900">
									React can be used as a UI library to render elements, without enforcing a specific
									project structure, and that’s why it’s not strictly a framework. React Elements
									are the smallest building blocks of React apps. They are more powerful than DOM
									elements because the React DOM makes sure to update them efficiently whenever
									something changes.
									<br />
									The Vue.js core library focuses on the View layer only. It’s called a progressive
									framework because you can extend its functionality with official and third-party
									packages, such as Vue Router or Vuex, to turn it into an actual
									framework.Components in Vue are small, self-contained, and can be reused
									throughout the application. Single File Components (SFCs) with the .vue extension
									contain HTML, CSS, and JavaScript so that all relevant code resides in one file.
									<br />
									AngularJS, the original framework, is an MVC (Model-View-Controller)) framework.
									But in Angular 2, there’s no strict association with MV*-patterns as it is also
									component-based. Projects in Angular are structured into Modules, Components, and
									Services. Each Angular application has at least one root component and one root
									module.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
