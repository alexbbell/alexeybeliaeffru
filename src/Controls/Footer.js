import React, { Component} from 'react'


class Footer extends Component {
    render() {

        if(this.props.data) {
           var socialn = this.props.data.social.map(function (soc)  {
              return <a key={soc.url} href={soc.url}><i className={soc.className}></i></a>
           });
        }
  
        return (
        <footer id='social' className="footer_area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-12">
					<div className="footer_top flex-column ">
						<div className="footer_social">{socialn}</div>

					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="footer_top flex-column ">
                        <div> 
                        
Email: <a href="mailto:beliaeff@gmail.com">beliaeff@gmail.com</a>
<br />
Phone: <a href="tel:+79261803635" >+7 9261803635</a> (mobile, WhatsApp)<br />
Phone: <a href="tel:+972585362546" >+972 585362546</a> (mobile, WhatsApp)


                        </div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="footer_top flex-column ">
                        <div> 

Blogs: <a href="http://markimarta.ru/">markimarta.ru</a>, <a href="http://markimarta.com/">markimarta.com</a>, 
<a href="http://mark-and-marta.ru/">mark-and-marta.ru</a>
<br />

                        </div>
					</div>
				</div>
			</div>

		</div>
	</footer>
        
        )
    }
}


export default Footer;