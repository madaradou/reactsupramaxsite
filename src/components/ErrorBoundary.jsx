import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props){
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error){
    return { error }
  }
  componentDidCatch(error, info){
    console.error('ErrorBoundary caught', error, info)
  }
  render(){
    if (this.state.error) {
      return (
        <div style={{padding:20,background:'#fff4f4',color:'#660000',borderRadius:8}}>
          <strong>Une erreur est survenue en affichant les réalisations.</strong>
          <div style={{marginTop:8,fontSize:13}}>{String(this.state.error)}</div>
        </div>
      )
    }
    return this.props.children
  }
}
