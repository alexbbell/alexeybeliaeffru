
export interface ITeam {
    teamId: number,
    title: string, 
    folderName: string,
}

export interface IImage {
    filename: string, 
    size?: number,
    teamId?: number,
}

export interface IImageCollection  {
    team: ITeam, 
    images: IImage[],
    isActive: boolean,
}

export const teams :ITeam[] = [ 
    { teamId : 1, title: 'Team 1', folderName: 'team1'},
    { teamId : 2, title: 'Team 2', folderName: 'team2'},
    { teamId : 3, title: 'Team 3', folderName: 'team3'}]

export const teamImages:IImageCollection[] = [
    { team:  teams[0] , images: [ { filename: '01.png'  }, { filename: '02.png'  } ], isActive: true},
    { team:  teams[1] , images: [ { filename: '02.png'  }, { filename: '03.png'  } ], isActive: true},
    { team:  teams[2] , images: [ { filename: '01.png'  }, { filename: '03.png'  } ], isActive: true},
    //{ teamId: 1, images: [ { filename: '01.png'  }, { filename: '02.png'  } ]},
]