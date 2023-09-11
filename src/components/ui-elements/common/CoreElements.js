import { Fragment, useContext } from "react";
import { IsEmpty } from "./UtilElements";

const emptyFuntion = (...para) => { }

const NoResultFound = () => {
  return (
    <div>No result found</div>
  );
}

const LoopItms = ({
  wrapperStyle = "todo-list",
  items = [],
  renderIFEmpty = (<NoResultFound />),
  renderItem = emptyFuntion,
}) => {
  return (
    <div className={wrapperStyle}>
      <IsEmpty
        value={items}
        renderIFEmpty={renderIFEmpty}
      >
        <Fragment>
          {
            (items).map((item, index) => renderItem(item, index))
          }
        </Fragment>
      </IsEmpty>
    </div>
  )
}

// const SpinWrapper = ({
//   size="large"
// })=>{
//   return (
//     <Spin 
//       size={size}
//     />
//   )
// }

// const FullPageLoader=()=>{
//   const [uiStatus] = useContext(UIContext);
//   return (
//     <Fragment>
//       {
//         ( uiStatus.isload )? (
//             <div className="page-loader">
//               <SpinWrapper/>
//             </div>
//           ): ( null )
//       }
//     </Fragment>
//   );
// }

export {
  LoopItms,
  NoResultFound,
  emptyFuntion,
  // FullPageLoader
}