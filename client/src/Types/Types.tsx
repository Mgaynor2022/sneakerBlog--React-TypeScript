

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
    jordanSneakers: {}[],
    _id: string
    id: string,
    colorway: string,
    gender: string,
    silhouette: string,
    releaseYear: string,
    releaseDate: string,
    retailPrice: Number,
    retail: any,
    estimatedMarketValue: Number,
    story: String,
    likes: [],
    dislikes: []
    backButton: () => void
    likeKobeSneaker: (sneakerId: string) => void,
    dislikeKobeSneaker: (sneakerId: string) => void
    commentButton: (sneakerId: string) => void
    comments: Array<Comments>,
    details:{
        retail: number,
        releaseDate: string,
        brand: string,
        type: string,
        gender: string,
        description: string
    }

}
export interface Kobe  {
    
    _id: string;
    brand: string,
    name: string,
    releaseDate: string,
    retailPrice: number,
    story: String,
    image: any,
    upvotes: []
    downvotes: []
    getComments: (sneakerId: string) => void
    likeKobeSneaker: (sneakerId: string) => void,
    dislikeKobeSneaker: (sneakerId: string) => void
   backButton: () => void
   commentButton: (sneakerId: string) => void
   comments: Array<Comments>,
   commentsLength: (sneakerId: string) => void
   commentInput: {
    username: string,
}

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
    user: string
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
    jordanSneakers: Array<Sneakers>
    getPublicSneakers: () => void;
    getPopularSneakers: () => void ,
    getKobeSneakers: () => void,
    getJordanSneakers: () => void
    likeKobeSneaker: (sneakerId: string) => void,
    dislikeKobeSneaker: (sneakerId: string) => void,
    likePopularSneakers: (sneakerId: string) => void,
    dislikePopularSneakers: (sneakerId: string) => void,
    likePublicSneakers: (sneakerId: string) => void,
    dislikePublicSneakers: (sneakerId: string) => void,
    likeJordanSneaker: (sneakerId: string) => void,
    dislikeJordanSneaker: (sneakerId: string) => void,

}

export type CommentContextType = {
    commentInput: {
        username: string,
        comment: string
    };
    handleTextArea: (e:React.ChangeEvent <HTMLTextAreaElement> ) => void;
    handleChange:(e: React.ChangeEvent <HTMLInputElement>) => void;
    handleDelete: (commentId: string) => void,
    addComment: (sneakerId: string, info: object, ) => void,
    comments: Array<Comments>,
    getComments: (sneakerId: string) => void
    // sneakerId: string
    // _id: string 
    commentButton: (sneakerId: string) => void
    currentId: string | null
    commentsLength: (sneakerId: string) => any
    // commentId: string
    getAllComments: () => void

}

export interface Comments {
    _id: string;
    comments: Array<Comments>
    timestamp: string;
    sneakerId: string;
    handleDelete: (commentId: string) => void,
    comment:string
    commentId: string
    userId: string
    user: any
    postBy: string
    time: string
}
export interface CommentsForm {
    commentInput: {
        username: string,
        comment: string
    }
        handleTextArea: (e:React.ChangeEvent <HTMLTextAreaElement> ) => void;
        addComment: (sneakerId:string, info:object) => void
        sneakerId: string;
}

export interface CommentDisplayProps {
    user: any
    sneakerId: string;
    handleDelete: (commentId: string) => void,
    // just added
    comments: Array<Comments>
}