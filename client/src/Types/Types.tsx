

export type AuthProps = {
    inputs: {
      username: string,
      password: string
    },
    handleSubmit: (e: React.FormEvent <HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent <HTMLInputElement>) => void;
    errMsg: string;
    btnText: string,
    header: string
  }

  export type BrandLink = {
    image: string,
    header: string,
    // handleClick: () => void
  }
 
export interface Sneakers {
    slug: string ,
    name: string ,
    brand: string,
    sku: string,
    image: string ,
    category: string ,
    release_date: string,
    description: string,
    price: number
    addComment: (info: string) => void,
    getPopularSneakers: () => void ,
    getComments: () => void,
    deleteComment: (commentId: string) => void
    handleChange:(e: React.ChangeEvent <HTMLInputElement>) => void;
    commentInput: {
        username: string,
        UserComment: string
    },
    popularSneakers: {}[];
    kobeSneakers: {}[],
    allSneakers: {}[],
    _id: string
    id: string,
    colorway: string,
    gender: string,
    silhouette: string,
    releaseYear: string,
    releaseDate: string,
    retailPrice: Number,
    estimatedMarketValue: Number,
    story: String,
    likes: [],
    dislikes: []
    backButton: () => void
    likeKobeSneaker: (sneakerId: string) => void,
    dislikeKobeSneaker: (sneakerId: string) => void
    commentButton: (sneakerId: string) => void
    comments: Array<Comments>,

}
export interface Kobe  {
    
    _id: string;
    
    thumbnail: string | undefined;
    id: string,
    sku: string,
    brand: string,
    name: string,
    colorway: string,
    gender: string,
    silhouette: string,
    releaseYear: string,
    releaseDate: string,
    retailPrice: number,
    estimatedMarketValue: number,
    story: String,
    image: string,
    images:{
        original: string,
        small: string,
        thumbnail: string
    },
    
    links: {
        stockx: string,
        goat: string,
        flightClub: string,
        stadiumGoods: string
    },
    upvotes: []
    downvotes: []
    getComments: (sneakerId: string) => void
    likeKobeSneaker: (sneakerId: string) => void,
    dislikeKobeSneaker: (sneakerId: string) => void
    // setCurrentKobeId: () => {}
    // currentKobeId: string | null
   toggleComments: () => void
   backButton: () => void
   commentButton: (sneakerId: string) => void
   comments: Array<Comments>,

}

export interface Inputs  {
    username: string;
    password: string;
}[]


export type  UserContextType = {
    getPublicSneakers: () => void;
    allSneakers: Array<Sneakers>;
    signup: (credentials: Inputs) => void;
    login: (credentials: Inputs) => void;
    resetAuthErr: () => void,
    errMsg: string,
    comments: Array<Comments>
    logout: () => void,
    token: string,
    popularSneakers: Array<Sneakers>,
    getPopularSneakers: () => void ,
    getKobeSneakers: () => void,
    kobeSneakers: Array<Kobe>
    likeKobeSneaker: (sneakerId: string) => void,
    dislikeKobeSneaker: (sneakerId: string) => void
    backButton: () => void
    
}

export type SneakerContextType = {
    popularSneakers: {}[];
    kobeSneakers: {}[],
    allSneakers: {}[],
    getPublicSneakers: () => void;
    // allSneakers: Array<Sneakers>;
    // popularSneakers: Array<Sneakers>,
    getPopularSneakers: () => void ,
    getKobeSneakers: () => void,
    // kobeSneakers: Array<Kobe>
    likeKobeSneaker: (sneakerId: string) => void,
    dislikeKobeSneaker: (sneakerId: string) => void,
    likePopularSneakers: (sneakerId: string) => void,
    dislikePopularSneakers: (sneakerId: string) => void,

}

export type CommentContextType = {
    commentInput: {
        username: string,
        comment: string
    };
    handleTextArea: (e:React.ChangeEvent <HTMLTextAreaElement> ) => void;
    handleChange:(e: React.ChangeEvent <HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, info: string) => void;
    handleDelete: (commentId: string) => void,
    addComment: (sneakerId: string, info: string, ) => void,
    comments: Array<Comments>,
    getComments: (sneakerId: string) => void
    sneakerId: string
    _id: string 
    commentButton: (sneakerId: string) => void
    currentId: string | null

}

export interface Comments {
    _id: string;
    username: string;
    comment: string;
    timestamp: string;
    sneakerId: string;
    handleTextArea: (e:React.ChangeEvent <HTMLTextAreaElement> ) => void;
    handleChange:(e: React.ChangeEvent <HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, info: string) => void;
    handleDelete: (commentId: string) => void,
    commentInput: {
        username: string,
        comment: string
    };
}[]