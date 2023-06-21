import React, { Component } from 'react'
import './App.css'
import FragmentsDemo from './components/FragmentsDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefDemo from './components/RefDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import Counter from './components/Counter'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* fragments */}
        {/* <FragmentsDemo/>
        <Table/> */}

        {/* pure components */}
        {/* <ParentComp/> */}

        {/* refs */}
        {/* <RefDemo/> */}

        {/* refs with class component */}
        {/* <FocusInput/> */}

        {/* forwarding refs */}
        {/* <FRParentInput/> */}

        {/* portals */}
        {/* <PortalDemo/> */}

        {/* error boundary */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        
        <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary> */}

        {/* high order components */}
        {/* <ClickCounter/>
        <HoverCounter/> */}

        {/* render props */}
        {/* <ClickCounterTwo/>
        <HoverCounterTwo/>
        <User render= {
          (isLoggedIn) =>  isLoggedIn ? 'karan' : 'guest'
        }
        /> */}
        {/* <Counter
            render = {(count, incrementCount) => (
              <ClickCounterTwo count = {count} incrementCount = {incrementCount} />
            )}
        />

        <Counter
            render = {(count, incrementCount) => (
              <HoverCounterTwo count = {count} incrementCount = {incrementCount} />
            )}
        /> */}

        {/* context */}
        <UserProvider value="karan">
          <ComponentC/>
        </UserProvider>
      </div>
    )
  }
}

export default App
