import React from 'react'

import { useGetLinksQuery } from '../../services/docs'
import InputAddLink from '../input-add-link/InputAddLink'
import LinkElement from '../link-element/LinkElement'

const LinkList = () => {
  const { data: links, isLoading, isSuccess, error } = useGetLinksQuery()

  if (isLoading) {
    return <div>...loading</div>
  } else if (error) {
    return <React.Fragment>...errror</React.Fragment>
  } else if (isSuccess) {
    return (
      <div>
        <InputAddLink />
        <div>
          {links.map((link: any) => {
            return (
              <div key={link.id}>
                <LinkElement data={link} />{' '}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default LinkList
