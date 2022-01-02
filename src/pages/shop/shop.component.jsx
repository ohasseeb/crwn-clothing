import React from "react";
import { Route } from "react-router-dom";
// import SHOP_DATA from './shop.data';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
// import CollectionPreview from '../../components/collection-preview/collection-preview'

const ShopPage = ({ match }) => (
  <div className="shop-page">
    {/* <CollectionOverview /> */}
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    {/* Need To Nest The Route so it knows which ones to display */}

    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
