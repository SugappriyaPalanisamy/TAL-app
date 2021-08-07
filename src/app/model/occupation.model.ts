export enum Rating {
  Professional = 1.0,
  WhiteCollar  = 1.25,
  LightManual  = 1.50,
  HeavyManual  = 1.75
}
export interface IOccupation {
  Name: string;
  Rating: Rating;
}
export var OccupationList: IOccupation[] = [
  { Name: "Cleaner", Rating: Rating.LightManual },
  { Name: "Doctor", Rating: Rating.Professional },
  { Name: "Author", Rating: Rating.WhiteCollar },
  { Name: "Farmer", Rating: Rating.HeavyManual },
  { Name: "Mechanic", Rating: Rating.HeavyManual },
  { Name: "Florist", Rating: Rating.LightManual }
]
