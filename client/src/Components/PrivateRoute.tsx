import { Navigate } from 'react-router'

export default function PrivateRoute(props: { token: any; children: any; redirectTo: any; }) {
    const {token, children, redirectTo} = props
    return token ? <>{children}</> : <Navigate to={redirectTo} />;
  }

   // <div className="relative grid grid-cols-1 gap-4 p-3 mb-8 border  bg-white md:space-y-0 rounded-xl shadow-lg  w-72 md:max-w-3xl mx-auto">
            //     <div className="relative flex gap-4">
            //     <div className="flex flex-col w-full">
            //         <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">
            //             <p className="w-14 h-14 bg-yellow-500 rounded-full text-2xl whitespace-nowrap capitalize ">{firstLetterOfUserName}</p>
            //             <p>{dateMDY}</p>
            //         </div>
            //         <p className="text-gray-400 text-sm">{formattedTime}</p>
            //     </div>
            // </div>
            // <p className="-mt-4 text-gray-500">{comment} </p>
            //     <TiDelete className="text-red-500" size='1.5rem' cursor="pointer" onClick={() => handleDelete(commentId)}/>
            // </div> 