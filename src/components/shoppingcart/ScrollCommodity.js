import React, {Component} from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import IconButton from '@material-ui/core/IconButton';
import history from '../../routes/history.js';



const classes ={
		root:{
			width:'100%',
			height:'180px',
			backgroundColor: '#fff',
			padding: '5px',
			
		},
		row:{
			backgroundColor:'#aaa',
			width:'33%',
			height: '100%',
			margin: '5px',
			position: 'relative',
			'backgroundPosition': "center center",
			'backgroundSize':'cover',
			'backgroundRepeat': 'no-repeat',
			transition: '0.5s ease-in-out'
		},
		// rowDisabledLeft:{
		// 	transform: 'translateX(-90px)'
		// },
		// rowDisabledRight:{
		// 	transform: 'translateX(90px)'
		// },
		Disabled:{
			width:0,
			opacity:0
		},
		rowCover:{
			backgroundColor:'rgba(0,0,0,0.4)',
			width:'100%',
			height:'40%',
			position:'absolute',
			bottom: 0,
			color:'#fff',
			padding: '5px',
			textAlign:'center'
		},
		container:{
			width:'100%',
			height:'100%',
			display:'flex',
			padding: '0 30px ',
			position: 'relative'
		}
	}
	

class ScrollCommodity extends Component {

	constructor(props){
		super(props);
		this.state = { show : 0 , movie: false}
	}
	
	handleRight(){
		if(this.state.show > 3){
			return
		}else{
			this.setState({show:this.state.show+1})
		}
		
	}
	handleLeft(){
		if(this.state.show <= 0){
			return
		}else{
			this.setState({show:this.state.show-1})
		}
		
	}
// 


	array(){		
		if(this.props.commodityList[0] ===undefined){
			return
		}else{
			return(
				this.props.commodityList[0].map((item,i) =>{
					return(
						  (this.state.show > i-5 && this.state.show - i <= 0) ? 
							<div style={Object.assign({},classes.row, 
								{backgroundImage:`url(${item.productPicture})`},
								(this.state.movie === 'left') && classes.rowDisabledLeft,
								(this.state.movie === 'right') && classes.rowDisabledRight,
								(this.state.show == i) && classes.Disabled,
								(i - this.state.show ==4) && classes.Disabled
								)} 
								 key={item._id}
								 onClick={() => {history.push(`/commodity?${item._id}`)}}
							>
								<div style={classes.rowCover}>
									<div>
										{item.title}	
									</div>
									${item.price}
								</div>
							</div>
							:
							''
						
					)
					
				})			
			)			
		}

	}

	render(){
		return(

			<div style={classes.root}>
				<div style={classes.container}>
					<IconButton style={{'position' :'absolute',top:'50%',left:-10,transform:'translateY(-40%)'}} onClick={() => {this.handleLeft()}}>
						<ArrowLeftIcon  style={{fontSize: 50}}/>
					</IconButton>
					
					{
						this.array()
					}
					<IconButton style={{'position' :'absolute',top:'50%',right:-10,transform:'translateY(-40%)'}} onClick={() => this.handleRight()}>	
						<ArrowRightIcon style={{fontSize: 50}}/>						
					</IconButton>	
			
				</div>

			</div>
		)
	}
}

export default ScrollCommodity