# Thinking in Modules

For many holocron modules present a new concept and if you are transitioning
from more traditional single page applications or a new to front end it can
be difficult to identify what and where the boundaries are between modules.
To get the most out of building holocron modules it helps to alter how you think about
how you build out your front ent application.

Ideally the nature of modules needs to be understood at the design stage.

## What is a Holocron module ?

Lets start by identifying what a holocron module is.
In its simplest form, a holocron module is a self contained slice of user interface.
In an ideal world every module should work independently from other modules. The exception to
this is often the root module.

## Designing modules


## Think about reuse

## What is a root module and how is it different ?

## How does a module differ from a dependency ?

# What are the benefits

list the benefits of splitting your application into modules

# What are the costs

outline the costs of splitting your application into modules

# Data flow

While modules can receive props, either through ModuleRoute or RenderModule, it is recommended to keep these to
a minimum and use them tp help make a module more adaptable rather than passing in all the required data.
Modules should be independent and fetch any data they require themselves rather than receiving it through props, even if there are multiple modules
requiring the same data. You can use libraries such as `fetchye` to reduce the chance of duplicated calls.
While one-app does provide a redux store modules should not use the store to pull data created by another module.
This creates a coupling between modules and reduces the reusability of the consuming module.

Tightly coupled modules make it harder to reuse, harder to update a single modules as this update could break another module.



Modules are published independently, you should aim to take advantage of this.

Try to focus on creating the module as its own self contained user experience rather than
as part of a larger application. You can publish a new module version independently of having
your application take that change. One App will not take a module change until the module map
has been updated. This means you can create a new version of a module, publish the bundle to a CDN
and have you instance of One App update or rollback that version at any point in time after the bundle
has been made available.

The more independent a module is the easier it is to take new changes, or if something goes wrong rollback
a change by updating the module map to take an older stable version.

An advantage of independent modules is you can have multiple instances of the one-app sever running
each pointing to a different module map. Each module map could consist of different combinations of modules and
their versions. Because of this it helps to think of modules as independent from an application.



It can be difficult to decide how granular to take your application.
Breaking your ui in to small component sized modules can create complications.
Finding the balance of how granular to take your application is the key to building
efficient and reusable modules which provide value on their own.

Its easy to create a new module and break down a large module into smaller modules at a later stage.


Holocron modules are a new method for splitting up your front end.
They allow you to break your UI to self contained units of user experience.

when designing your application it can help to think as modules as reuseable slices of user experience

They should be self contained and be designed to run in their own context

coupling should be kept to a minimum

Make use of tools such as Fetchye to reduce the requirement for passing data through props
or searching though a shared state.

Focus on reuse.

Don't go to granular

You can start with a single module then refactor as your application grows

Do not couple modules,

every module should request its own data.


# Extracting to a shared dependency

Take advantage of creating npm dependencies. sometimes you might want to have shared components across multiple modules



# Finding the balance

# Good Example

Reservation form.

# Bad Example

Too granular..

Coupling of data, requires props

# Best practices
