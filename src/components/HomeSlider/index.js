import React from "react"
import './index.css'
import { useNavigate } from "react-router-dom"
class Slide extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
    this.slide = React.createRef()
  }
  
  handleMouseMove(event) {
    const el = this.slide.current
    const r = el.getBoundingClientRect()

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
  }
  
  handleMouseLeave(event) {    
    this.slide.current.style.setProperty('--x', 0)
    this.slide.current.style.setProperty('--y', 0)
  }
  
  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index)
  }
  
  imageLoaded(event) {
    event.target.style.opacity = 1
  }

  GotoProduct=(id)=>{
    const navigate=this.props.navigate
    navigate(`products/${id}`)
  }
  
  render() {
    const { src, button, headline, index, ProductId } = this.props.slide
    const current = this.props.current
    let classNames = 'slide'
    
    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'
        
    return (
      <li 
        ref={this.slide}
        className={classNames} 
        onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img 
            className="slide__image"
            alt={headline}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>
        
        <article className="slide__content">
          <h2 className="slide__headline">{headline}</h2>
          <button className="slide__action btn" onClick={()=>this.GotoProduct(ProductId)}>{button}</button>
        </article>
      </li>
    )
  }
}


const SliderControl = ({ type, title, handleClick,fu }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className={`icon ${fu}`} viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  )
}


class Slider extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { current: 0 }
    this.handlePreviousClick = this.handlePreviousClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
  }
  
  handlePreviousClick() {
    const previous = this.state.current - 1
        
    this.setState({ 
      current: (previous < 0) 
        ? this.props.slides.length - 1
        : previous
    })
  }
  
  handleNextClick() {
    const next = this.state.current + 1;
    
    this.setState({ 
      current: (next === this.props.slides.length) 
        ? 0
        : next
    })
  }
  
  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index
      })
    }
  }

  render() {
    const { current} = this.state
    const { slides, heading } = this.props 
    const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
    const wrapperTransform = {
      'transform': `translateX(-${current * (100 / slides.length)}%)`
    }
    
    return (
      <div className='slider' aria-labelledby={headingId}>
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} className="visuallyhidden">{heading}</h3>
          
          {slides.map(slide => {
            return (
              <Slide
                key={slide.index}
                slide={slide}
                current={current}
                handleSlideClick={this.handleSlideClick}
                navigate={this.props.navigate}
              />
            )
          })}
        </ul>
        
        <div className="slider__controls">
          <SliderControl 
            type="previous"
            title="Go to previous slide"
            handleClick={this.handlePreviousClick}
            fu={"fu"}
        />
          
          <SliderControl 
            type="next"
            title="Go to next slide"
            handleClick={this.handleNextClick}
            fu={""}
          />
        </div>
      </div>
    )
  }
}


export default (props)=>{
  const navigate=useNavigate();
  return(<Slider {...props} navigate={navigate}/>)
}