import { getPostService } from '../../services';

// 请求页面时获取数据
export async function getServerSideProps() {
  const list = await getPostService();
  return {
    props: { list },
  };
}

// 获取数据后响应界面
const SSRPage = ({ list }) => {
  return (
    <div className="grid gap-4">
      <h3>Posts</h3>

      <div className="grid gap-3 grid-cols-3">
        {list.map((li) => (
          <div key={li} className="grid gap-4 p-4 rounded-md border shadow-md">
            <h4>post - {li}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              asperiores voluptatum. Modi reiciendis voluptates reprehenderit
              nostrum quas! In distinctio necessitatibus explicabo dolorum
              facilis mollitia ipsum natus! Ullam atque odit eligendi?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SSRPage;

// 打包时获取数据
// export async function getStaticProps({ params }) {
//     const post = findPost(params?.id);

//     return {
//       props: { post },
//     };
//   }
