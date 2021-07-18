/** @format */

import React from 'react';

export function Home(props) {
	return (
		<>
			<br />
			<br />

			<div className='container-fluid'>
				<div className='row'>
					{' '}
					<div className='col-md-8 col-sm-4 '>
						<table border='10' bordercolor='ff' className='tb'>
							<tr className='tb'>
								<img
									src='https://res.cloudinary.com/msaken/image/upload/v1626384147/ysrvthucwm9sczbobbyj.jpg'
									className='img shrink'
									width='350px'
									height='250px'
								/>
							</tr>
							<tr className='tb'>
								<img
									src='https://res.cloudinary.com/msaken/image/upload/v1626384186/ipvd7pwjfhz4nv15ui66.gif'
									className='img  '
									width='250px'
									height='151px'
								/>
							</tr>

							<tr className='tb'>
								{' '}
								<img
									src='https://res.cloudinary.com/msaken/image/upload/v1626384125/lt1ydso214tyale7gld7.png'
									className='img shrink'
									width='350px'
									height='250px'
								/>{' '}
							</tr>
						</table>{' '}
					</div>{' '}
					<div className='col-md-3 '>
						<marquee behavior='scroll'>
							<h3 className='u'>Bienvenue à ONTOCONSTRUCTION</h3>
						</marquee>
					</div>
				</div>{' '}
				<br /> <br />
				<footer className='footer'>
					<br />
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 col-sm-6 col-xs-12'>
								<p className='copyright-text'>
									ONTOCONSTRUCTION sarl — Villeneuve l abbe — 63720 SAINT IGNAT—
									FRANCE
									<br />
									No SIRET : xxxx <br /> No TVA Intracommunautaire : xxxx
									<br />
									E-mail : c.renard@ontonomia.com
									<br />
									Tél :
									<img
										width='50px'
										height='50px'
										src='https://www.unitag.io/qreator/generate?crs=Ppv8rOENN3V1lAwTz82zPpEYgrTpeQPpAxSJGcmyf1zqoOPAufHCjI4ccbj8leQIffpWitL50YSc%252FcPVAqhvQcY8L%252ByEXXE2GKn8SsxpZk4WZaQp7PKE7yfTgH2P3e9CKW00WL5%252F1cMS7FElOQtZuX8mpOG0vfXH1R11ooGrRdY%253D&crd=74OG4hDsh%252FbuMj9nb9e0j2LPG7FlY2v4PIoeEgXfbQTijpG9F8M0ZcV0yE%252F65%252BoP7x%252FXBLk0TalLHJ8QAKKzgg%253D%253D'
									/>{' '}
								</p>
							</div>
							<div class='column hh'>
								<img
									className='img'
									width='50px'
									height='50px'
									src='https://www.unitag.io/qreator/generate?crs=Ppv8rOENN3V1lAwTz82zPjZwLeh11CXT8n%252BHMzWMdvUb%252BsqQ%252Foeme7xO4uqEGrEiWXSFsLOZjD0p0af8Oe4JUujrLgxVVfT89%252BGD2g4vFdKZQuP4Fdgab3F2t1Q5SyqVAKxBAM%252Fu7kV9E28Zhu5m8Uk6%252B%252FTe0LUTdqPNGCzpps7JW1xbuyL4%252FEnsJXZL6otJORTmsRxJws8FLFIZXWcsgTC7BvWGvmZ%252F30YYTtj%252FjCveV2QVtvzvXOAdCIFgsYLUoA7RS5MTUMLs9em8vjsfh0%252B5k%252FncPYmy3ryhdgAOmSfZiL4NpGSb8%252FgS%252BibGrZls07w%252B%252FPIbc9nUBFcYlKUxzg%253D%253D&crd=fhOysE0g3Bah%252BuqXA7NPQ87MoHrnzb%252BauJLKoOEbJsqh3Xgr6BqraiZPzwZmQq55Ug8JpD4LvSZWrc0KbKHJLA%253D%253D'
								/>
							</div>
							<div class='column '>
								<img
									className='img'
									src='https://www.unitag.io/qreator/generate?crs=Ppv8rOENN3V1lAwTz82zPjZwLeh11CXT8n%252BHMzWMdvUb%252BsqQ%252Foeme7xO4uqEGrEiWXSFsLOZjD0p0af8Oe4JUujrLgxVVfT89%252BGD2g4vFdKZQuP4Fdgab3F2t1Q5SyqVAKxBAM%252Fu7kV9E28Zhu5m8Uk6%252B%252FTe0LUTdqPNGCzpps7JW1xbuyL4%252FEnsJXZL6otJORTmsRxJws8FLFIZXWcsgTC7BvWGvmZ%252F30YYTtj%252FjCveV2QVtvzvXOAdCIFgsYLUoA7RS5MTUMLs9em8vjsfh0%252B5k%252FncPYmy3ryhdgAOmSfZiL4NpGSb8%252FgS%252BibGrZls07w%252B%252FPIbc9nUBFcYlKUxzg%253D%253D&crd=fhOysE0g3Bah%252BuqXA7NPQ87MoHrnzb%252BauJLKoOEbJspfDWqC0lJzmTtroO5X%252FRhAXyIg2%252Bf8hnqo9oppOs%252FpPQ%253D%253D'
									width='50px'
									height='50px'
								/>{' '}
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
export default Home;
