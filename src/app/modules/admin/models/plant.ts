export class Plant {
  constructor(
    public name: string='',
    public price: number =1,
    public quantity: number= 0,
    public inStock: string[]=['disponible','partiellement disponible', 'non disponible'],
    public category:string[]=['plantes fleuries','orchides','cactus et plantes grasses','bonsas','plantes vertes','palmier dintrieur'],
    public urlPicture: string = "https//picsum.photos/id/18/200/300",
    public rating: number = 0,
    public id: string = ''
  ){}
}
