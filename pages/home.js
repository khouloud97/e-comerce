/** @format */

import React from 'react';

export function Home(props) {
	return (
		<>
			<br />
			<div className='container-fluid border  '>
				<div className='row'>
					<div className='col-md-4  lm-6 border '>
						<img
							src='https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/208105075_528634471520647_3560919924172748412_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=aee45a&_nc_ohc=f7gHxUsvkMkAX_zJh4B&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=bf93d65de97916626dfdb71bba2a42f5&oe=60E72E35'
							className='img shrink'
							width='450px'
							height='350px'
						/>
						<hr className='hr'></hr>
						<img
							src='https://cdn.fbsbx.com/v/t59.2708-21/213024767_239973514351892_4286643390153826630_n.gif?_nc_cat=105&ccb=1-3&_nc_sid=041f46&_nc_ohc=kOOkZWxPSoEAX8c8ili&_nc_ht=cdn.fbsbx.com&oh=87be4982f0f32027f7cce7e4b623d79f&oe=60E46E15'
							className='img shrink'
							width='250px'
							height='151px'
						/>
						<hr className='hr'></hr>{' '}
						<img
							src='https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/212681311_140486681491641_9083505627132837105_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=aee45a&_nc_ohc=9kq4WwtDWUIAX-7cBiL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=454ce91ae9f1c4654f8586e25a768481&oe=60E7CCAA'
							className='img shrink'
							width='450px'
							height='350px'
						/>
					</div>
					<div className='col-md-8 border '> </div>
				</div>
			</div>
		</>
	);
}
export default Home;
/**
 * <div className="ok">
				<div class='position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light bgg'>
					<div class='col-md-5 p-lg-5 mx-auto my-5'>
						<a class='btn btn-outline-secondary hh b' href='#'>
							Bientot{' '}
						</a>
					</div>
				</div>
				<div className='row'>
					<img
						src='https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/212681311_140486681491641_9083505627132837105_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=aee45a&_nc_ohc=9kq4WwtDWUIAX-7cBiL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=454ce91ae9f1c4654f8586e25a768481&oe=60E7CCAA'
						className='img shrink'
						width='450px'
						height='350px'
					/>
				</div>
				</div>
				<div className='container '>
					<img
						className='img'
						src='data:image/png;base64,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'
						width='400px'></img>
				</div>

				<div className='container border'>
					<div className='row'>
						<img
							src='https://sud-bois.fr/136-large_default/liteaux-douglas-27-x-40-mm-botte-de-12-en.jpg'
							className='img shrink'
							width='200px'
							height='200px'
						/>
						<img
							src='https://media3.kenzai.fr/11454-large_default/liteaux-sapinepicea-choix-2-pefc-brut.jpg'
							className='img shrink'
							width='200px'
							height='200px'
						/>
						<img
							src='https://www.batiproduits.com/img/poutre-en-pin-sylvestre-traite-haute-durabilite-kebony-character-poutre-002623223-product_maxi.jpg'
							className='img shrink'
							width='200px'
							height='200px'
						/>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5n14W7iZ4iZpygGh7Yiiv_y6hh_v85tYCw&usqp=CAU'
							width='200px'
							height='200px'
							className='img shrink'
						/>
					</div>
					<br />
					<div className='row'>
						{' '}
						<img
							src='https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/212681311_140486681491641_9083505627132837105_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=aee45a&_nc_ohc=9kq4WwtDWUIAX-7cBiL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=454ce91ae9f1c4654f8586e25a768481&oe=60E7CCAA'
							className='img shrink'
							width='200px'
							height='200px'
						/>
						<img
							src='https://i.ytimg.com/vi/g_OuNBz9isA/maxresdefault.jpg'
							className='img shrink'
							width='200px'
							height='200px'
						/>
						<img
							src='https://charpentebois.com/wp-content/uploads/2019/06/B%C3%A2timent-%C3%A0-ossature-bois-standard-avec-gros-plan-sur-les-fermes-de-de-la-charpente-du-toit-1024x683.jpg'
							className='img shrink'
							width='200px'
							height='200px'
						/>
					</div>
				</div>
 */
