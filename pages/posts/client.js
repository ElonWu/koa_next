import { useEffect, useState } from 'react';
import useSWR from 'swr';

// 响应界面后，获取数据
const ClientPage = () => {
  const [list, setList] = useState();

  // 服务端渲染页面后，再触发数据请求
  const { data: res } = useSWR('/api/posts', fetch);

  useEffect(() => {
    res && res.json().then((value) => setList(value));
  }, [res]);

  return (
    <div className="grid gap-4">
      <h3>Posts</h3>

      <div className="grid gap-3 grid-cols-3">
        {!Array.isArray(list)
          ? 'loading'
          : list.map((li) => (
              <div
                key={li}
                className="grid gap-4 p-4 rounded-md border shadow-md"
              >
                <h4>post - {li}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
                  asperiores voluptatum. Modi reiciendis voluptates
                  reprehenderit nostrum quas! In distinctio necessitatibus
                  explicabo dolorum facilis mollitia ipsum natus! Ullam atque
                  odit eligendi?
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ClientPage;
