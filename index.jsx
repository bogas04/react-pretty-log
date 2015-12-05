'use strict';

class PrettyLog extends React.Component {
  constructor (props) {
    super (props);

    let font = this.props.font || 'Helvetica';
    let color = this.props.color || 'rgb(176, 154, 154)';
    let size = this.props.size || '100px';


    this.mainStyle = {
      textAlign: 'center',
      fontFamily: font,
      margin: '10px',
    };

    this.titleStyle = {
      paddingTop: '4px',
      color: color,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    };

    this.indexStyle = {
      display: 'inline',
      position: 'relative',
      top: '-11px',
      right: '-35px',
      height: '5px',
      width: '5px',
      padding: '1px 4px',
      verticalAlign: 'middle',
      border: '4px solid ' + color,
      borderRadius: '50%',
      color: 'white',
      backgroundColor: color
    };

    this.imageStyle = {
      borderRadius: '50%',
      border: '5px solid ' + color,
      height: size,
      width: size,
      marginLeft: '-14px'
    };
  }
  render () {
    let cards = this.props.items.map ((v, k) => {
      return (
        <div style = {this.mainStyle} key = {v.url} >
          <div style = {this.indexStyle} >{k}</div>
          <img style = {this.imageStyle} src = {v.image} alt = {v.title} />
          <div style = {this.titleStyle} >{v.title}</div>
        </div>
      )
    });

    return (
      <div>
        {cards}
      </div>
    );
  }
}

module.exports = PrettyLog;
