var store = [
	{name : 'Aether Pack', sku : 'OSAE70', manufacturer : 'Osprey', type : 'Back Pack', category : 'Camping/Hiking', size : [70], price : 289.95, color : ['Bosai Green', 'Midnight Blue'], stock : 2, },
	{name : 'Atmos Pack', sku : 'OSAT65', manufacturer : 'Osprey', type : 'Back Pack', category : 'Camping/Hiking', size : [65,50], price : 235.95, color : ['Absinthe Green', 'Cinnabar Red'], stock : 5, },
	{name : 'Terra Pack', sku: 'NFT65', manufacturer : 'The North Face', type : 'Back Pack', category : 'Camping/Hiking', size : [65], price : 179.00, color : ['Moss','Asphalt Grey'], stock : 0, },
	{name : 'Catalyst Tent', sku: 'MACA2', manufacturer : 'Marmot', type : 'Tent', category : 'Camping/Hiking', size : [2], price : 169.00, color : ['Rusted Orange'], stock : 3, },
	{name : 'Catalyst Tent', sku: 'MACA3', manufacturer : 'Marmot', type : 'Tent', category : 'Camping/Hiking', size : [3], price : 229.00, color : ['Rusted Orange'], stock : 3, },
	{name : 'Kelty TN3 Tent', sku: 'KETN3', manufacturer : 'Kelty', type : 'Tent', category : 'Camping/Hiking', size : [3], price : 299.95, color : ['Grey/Green'], stock : 1, },
	{name : '580S Barrage Knife', sku : 'BMBA01', manufacturer : 'Benchmade', type : 'Knife', category : 'Hunting/Fishing', size : false, price : 135.00, color : ['resin'], stock : 6, },
	{name : '162 Bushcrafter Knife', sku : 'BMBK01', manufacturer : 'Benchmade', type : 'Knife', category : 'Hunting Fishing', size : false, price : 195.00, color : ['polymer'], stock : 0, },
	{name : 'Kodiak Magnum Recurve Bow', sku : 'BRKMRE', manufacturer : 'Bear', type : 'Bow', category : 'Hunting/Fishing', size : [52], price : 479.99, color : false, stock : 4, },
	{name : 'Phenom Bow', sku : 'PSWPH', manufacturer : 'PSE', type : 'Bow', category : 'Hunting/Fishing', size : [36], price : 699.99, color : ['black'], stock : 2, }
];

let StoreMap		= new Map();
StoreMap.set('Aether Pack', {name:'Aether Pack', sku:'OSAE70', manufacturer:'Osprey',type:'Back Pack', category:'camping/hiking',size:[70],price:289.95,color:['Bonsai Green','Midnight Blue'],stock:2});