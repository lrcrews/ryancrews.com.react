import { PostCategory } from "../PostsHome";
import PostWrapper from "../PostWrapper";

function HelloWorldScreen() {
  return (
    <PostWrapper
      category={PostCategory.CoolThing}
      subTitle="sometimes we need to POC some things"
      title="Hello World!"
    >
      <p>
        This is a test post for testing stuff. Such is the purpose of the Hello
        and the Worlds.
      </p>
      <p>
        What follows is a bunch of Snoop Dogg lorem impsum and tests of shared
        components. Neat-o!
      </p>
      <p>
        Praesent yo mamma mi nizzle mauris posuere bibendizzle. Aliquizzle
        lacinia ma nizzle lectus. The bizzle izzle enim izzle black sodalizzle
        fo shizzle. lobortis, mauris vitae dapibizzle shizznit, nulla bizzle
        dawg gizzle, dope own yo' augue dui in its fo rizzle. Vivamizzle dizzle
        lacizzle id shiz. Vivamizzle arcu boom shackalack, fermentum sit amet,
        faucibus izzle, fo shizzle sizzle, maurizzle. Sizzle tellivizzle check
        out this fo shizzle. Vestibulizzle gizzle dizzle, hendrerit the bizzle,
        condimentizzle ac, malesuada a, arcu. Morbi check out this placerizzle
        nulla. Go to hizzle crunk erizzle fo the bizzle. Fusce metus sizzle,
        funky fresh yo, accumsizzle you son of a bizzle, elementizzle eget,
        neque. Fo shizzle my nizzle iaculizzle shiz a orci tincidunt sodales.
        Fusce sagittizzle, nulla eget sollicitudizzle bizzle, lacizzle quam boom
        shackalack erat, vitae gangster augue fo for sure arcu. Etizzle fo
        shizzle . Nunc dang that's the shizzle. Break it down crazy turpizzle.
        Vestibulizzle dizzle ass. Fo shizzle turpis gizzle, consectetuer izzle,
        tempor izzle, sure izzle, pede. Mofo tellus. Nulla nisi eros, my shizz
        sit amizzle, ultricizzle sure, tincidunt non, augue.
      </p>
    </PostWrapper>
  );
}

export default HelloWorldScreen;
