export class Audio {

  private id: number;
  private artistId: number;
  private src: string;
  private title: string;

  constructor(id: number, artistId, src: string, title: string) {
    this.src = src;
    this.title = title;
  }

  static build(data) {
    return new Audio(data.id, data.artistId, data.src,data.title);
  }

  getId(): number {
    return this.id;
  }

  getArtistId(): number {
    return this.artistId;
  }

  getSrc(): string {
    return this.src;
  }

  getTitle(): string {
    return this.title;
  }


}
