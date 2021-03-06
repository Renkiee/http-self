// cdn 内容分发网络
// 因为距离和网络传播速度这两个硬性条件导致，即使对http或者服务器做了很多的
// 优化，在路程传播中带来的延迟都是没办法解决的。所以迫切的需要一个东西
// 能解决这个问题。cdn就专门处理这种问题，在全世界各地建了很多很多的服务器，
// 当你的请求发过来之后，首先经过cdn，找到资源离你最近的服务器，读取并返回
// 如果本地没有资源，然后像源站请求，拿到数据返回给你并且缓存下来，这样下次
// 就可以直接在cdn里面获取资源了，


// 主要缓存的资源有，图片，视频，超文本，安装包这些静态资源，动态资源比如
// 数据这些缓存了也没有意义

// 负载均衡
// 原来没有cdn的时候 权威dns返回的是网站的服务器实际ip地址，浏览器收到dns后
// 直接连接网站请求。
// 有了cdn之后，会进入cdn全局负载均衡系统，
// 1. 查看用户的ip地址，查表得知地理位置，找到最近的边缘节点
// 2. 看用户的运营商网络，找相同网络的边缘节点
// 3. 找到边缘节点中负载较轻的节点
// 4. 检查其它因素，服务能力，带宽，响应时间
// 最后找到一台最合适的边缘节点，把ip地址返回给浏览器，这样用户就可以就近访问
// cdn的缓存代理了

// 缓存代理
// 命中率 越高越好
// 回源率 越低越好
// 一级缓存配置最高，直接连源站，
// 二级缓存配置低一些，直连用户，回源的时候二级缓存查找一级缓存 一级缓存没有就回源

// 现在cdn功能越来越多 不只是加速静态资源了，视频转码之类的也提供，让网站专注生产
// 优质内容

// cdn与源站通常有专网连接，对于无法缓存的动态数据，通过cdn也会比公网要快

// 为什么不用网站不自建同城异地多处机房呢？
// 因为成本太大，其实搭建好了也就是cdn的效果，有现成的为什么不用