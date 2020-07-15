import React, { Component } from 'react'
import AppHeader from '../components/AppHeader'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import AppFooter from '../components/AppFooter'

 class home extends Component {
    render() {
        return (
            <div>
              <AppHeader/> 
              <PageHeader />
              <Content/>
              <AppFooter/>
            </div>
        )
    }
}

export default home
