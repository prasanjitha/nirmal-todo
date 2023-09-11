import { Fragment } from "react";

import { NoResultFound } from "./CoreElements";
import { isEmpty } from "../../../helpers/util.helper";

const IsEmpty = ({
  value = null,
  renderIFEmpty = (<NoResultFound />),
  children = null,
}) => {
  return (
    <Fragment>
      {
        (isEmpty(value)) ? (
          <Fragment>
            {renderIFEmpty}
          </Fragment>
        ) : (
          <Fragment>
            {children}
          </Fragment>
        )
      }
    </Fragment>
  )
}


export {
  IsEmpty
}