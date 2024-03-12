abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    this.cameraMode = cameraMode;
    this.filter = filter;
  }
  abstract getSepia(): void
}


class Instagram extends TakePhoto {
          constructor(
                    public cameraMode: string, 
                    public filter: string,
                    public burst?: string
                    ){
                              super(cameraMode, filter);
                              this.burst = burst;
                    }
          getSepia(): void {
                    console.log("Hey! Sepia");
          }
}

const user = new Instagram("portrait", "darkCircle");

export {};
