import React, { Component } from 'react';

class SongSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prevDisable: true,
			nextDisable: this.refs && this.refs.offsetWidth >= this.refs.scrollWidth ? true : false
		};
	}

 componentDidMount() {
  this.checkButtons(this.refs.offsetWidth, this.refs.scrollWidth);
 }
	checkButtons = (offsetWidthValue, scrollWidthValue) => {
		this.setState({
			prevDisable: this.refs.scrollLeft <= 0 ? true : false,
			nextDisable: this.refs.scrollLeft + offsetWidthValue >= scrollWidthValue ? true : false
		});
	};

	render() {
		const offsetWidthValue = this.refs.offsetWidth,
            scrollWidthValue = this.refs.scrollWidth;
            
        const arr=this.props.children;
        const arr1=arr.slice(0,arr.length/2);
        const arr2=arr.slice(arr.length/2,arr.length);

		return (
            <React.Fragment>
            <div className="row">
                    <div className="col-12">
                            <div
                            className={`btn pull-right new-next `}
                            disabled={this.state.nextDisable}
                            onClick={() => {
                                this.refs.scrollLeft += offsetWidthValue;
                                this.checkButtons(offsetWidthValue, scrollWidthValue);
                            }}>
                            Next
                            </div>

                            <div
                            className={`btn pull-right new-prev `}
                            disabled={this.state.prevDisable}
                            onClick={() => {
                                this.refs.scrollLeft -= offsetWidthValue / 2;
                                this.checkButtons(offsetWidthValue, scrollWidthValue);
                            }}>
                            Prev
                            </div>   
                    </div>
                </div>

                
			<div
				className='song-slider-container'
				ref={el => {
					this.refs = el;
				}}>
                
                <div className="d-none d-md-block">  
                    <div className="row">
                        <div className="col-12">
				            <div className='new-slider-wrapper'>{this.props.children}</div>
                        </div>
                    </div>
                </div>

                <div className="d-block d-md-none">
                    <div className="row">
                        <div className="col-12">
			    	        <div className='new-slider-wrapper'>{arr1}</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
				            <div className='new-slider-wrapper'>{arr2}</div>
                        </div>
                    </div>
                </div>


            </div>  
           
            </React.Fragment>
		);
	}
}


export default SongSlider;