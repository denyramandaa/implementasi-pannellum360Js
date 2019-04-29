var viewer = pannellum.viewer(
	'canvas',
	{
		autoLoad : true,
		autoRotate : -2,
		compass : true,
		hotSpotDebug : false,
		default : {
			firstScene : '01_belgica_luar'
		},
		scenes : {
			'01_belgica_luar' : {
				hfov : 100,
				panorama : 'images/01-belgica-luar.jpg',
				pitch : 6.99878183829606,
				type : 'equirectangular',
				yaw : -94.39177862244102,
				hotSpots : [
					{
						pitch : 0.03437910909236887,
						sceneId : '02_belgica_masuk',
                        text: 'Masuk ke pelataran luar',
                        cssClass : 'up',
						type : 'scene',
						yaw : -94.58839860908854,
					}
				]
			},
			'02_belgica_masuk' : {
				hfov : 140,
				panorama : 'images/02-belgica-masuk.jpg',
				pitch : -3.6634937653543576,
				type : 'equirectangular',
				yaw : -112.6081486636549,
				hotSpots : [
					{
						pitch : -8.83923535494812,
						sceneId : '01_belgica_luar',
                        text: 'Keluar Benteng',
						type : 'scene',
                        cssClass : 'down',
						yaw : 62.375379490271364,
					},
					{
						pitch : -3.673761831662214,
						sceneId : '03_belgica_pojokbawah',
                        text: 'Ke salah satu sudut bastion benteng',
						type : 'scene',
                        cssClass : 'up',
						yaw : 126.61025503781826,
					},
					{
						pitch : -2.9429666899813833,
						sceneId : '04_belgica_halamantengah',
                        text: 'Masuk ke pelataran dalam',
						type : 'scene',
                        cssClass : 'up',
						yaw : -104.79116149614107,
					}
				]
			},
			'03_belgica_pojokbawah' : {
				hfov : 140,
				panorama : 'images/03-belgica-pojokbawah.jpg',
				pitch : -5.383104301353497,
				type : 'equirectangular',
				yaw : -175.60954347963332,
				hotSpots : [
					{
						pitch : -5.713111313862449,
						sceneId : '02_belgica_masuk',
                        text: 'Kembali ke ke pelataran luar',
                        cssClass : 'up',
						type : 'scene',
						yaw : -161.05925303807146,
					}
				]
			},
			'04_belgica_halamantengah' : {
				hfov : 100,
				panorama : 'images/04-belgica-halamantengah.jpg',
				pitch : 2.109433080973851,
				type : 'equirectangular',
				yaw : -128.27227084059638,
				hotSpots : [
					{
						pitch : -8.423703022309248,
						sceneId : '02_belgica_masuk',
                        text: 'Kembali ke pelataran luar',
                        cssClass : 'up',
						type : 'scene',
						yaw : -172.7224005840501,
					},
					{
						pitch : -2.1461954874185056,
						sceneId : '05_belgica_menujulantai2',
                        text: 'Ke salah satu ruangan menuju tangga',
                        cssClass : 'up',
						type : 'scene',
						yaw : -112.19121275686403,
					}
				]
			},
			'05_belgica_menujulantai2' : {
				hfov : 100,
				panorama : 'images/05-belgica-menujulantai2.jpg',
				pitch : -6.6562825028951655,
				type : 'equirectangular',
				yaw : -33.25418720709989,
				hotSpots : [
					{
						pitch : -9.928919931196367,
						sceneId : '04_belgica_halamantengah',
                        text: 'Kembali ke pelataran dalam',
                        cssClass : 'up',
						type : 'scene',
						yaw : 132.92775209011538,
					},
					{
						pitch : -1.6055245594160334,
						sceneId : '06_belgica_lantai2',
                        text: 'Naik ke pelataran patroli atas',
                        cssClass : 'up',
						type : 'scene',
						yaw : -13.671240244244848,
					}
				]
			},
			'06_belgica_lantai2' : {
				hfov : 150,
				panorama : 'images/06-belgica-lantai2.jpg',
				pitch : 10.507898112490977,
				type : 'equirectangular',
				yaw : -55.04127279751734,
				hotSpots : [
					{
						pitch : -14.704511475201228,
						sceneId : '05_belgica_menujulantai2',
                        cssClass : 'down',
						type : 'scene',
                        text: 'Turun ke ruangan tangga',
						yaw : -38.94668840542156,
					},
					{
						pitch : -5.012454572479533,
						sceneId : '07_belgica_menara',
                        cssClass : 'up',
                        text: 'Naik ke salah satu menara benteng',
						type : 'scene',
						yaw : -57.36618463512213,
					}
				]
			},
			'07_belgica_menara' : {
				hfov : 150,
				panorama : 'images/07-belgica-menara.jpg',
				pitch : -7.205349712033992,
				type : 'equirectangular',
				yaw : -13.924598586521062,
				hotSpots : [
					{
						pitch : -27.415800018460832,
						sceneId : '06_belgica_lantai2',
                        cssClass : 'down',
                        text: 'Turun ke pelataran patroli atas',
						type : 'scene',
						yaw : -67.9820153196034,
					}
				]
			}
		}
	}
);