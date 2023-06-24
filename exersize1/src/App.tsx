import React from 'react';
import {Gallery} from "./Gallery";
import {Avatar} from "./avatar/Avatar";
import {Items} from "./items/Items";
import {Scientists} from "./scientiest/Scientists";
import {Buttons} from "./button-group/Buttons";
import {Sculpture} from "./sculpture/Sculpture";
import {ArtForm} from "./formsArt/ArtForm";
import {ArtBucket} from "./formsArt/ArtBucket";
import {InspiringSculpture} from "./sculpture/InspiringSculpture";
import {CityQuiz} from "./managing-state/CityQuiz";
import {ChangeNameForm} from "./managing-state/ChangeNameForm";
import {ShapeEditor} from "./figures/ShapeEditor";
import {MultipleCounter} from "./managing-state/preserve-reset/MultipleCounter";
import SyncedInputs from "./managing-state/share-state/SyncedInputs";
import FilterableList from "./managing-state/share-state/FilterableList";
import {TaskApp} from "./managing-state/reducer/TaskApp";
import {PropDrillGallery} from "./managing-state/passing-data-deeply/PropDrillGallery";
import {KittenCarousel} from "./escape-hatches/KittenCarousel";


function App() {
  return (
      <div className="main-mg">
        {/*<Gallery/>*/}
        {/*<Avatar/>*/}
        {/*  <Items/>*/}
        {/*  <Scientists/>*/}
        {/*  <Buttons/>*/}
        {/*  <Sculpture/>*/}
        {/*  <ArtForm/>*/}
        {/*  <ArtBucket/>*/}
        {/*  <InspiringSculpture/>*/}
        {/*  <ShapeEditor/>*/}
        {/*  <CityQuiz/>*/}
        {/*  <ChangeNameForm/>*/}
          <MultipleCounter/>
          <SyncedInputs/>
          <FilterableList/>
          <TaskApp/>
          <PropDrillGallery/>
          <KittenCarousel/>
      </div>
  );
}

export default App;
