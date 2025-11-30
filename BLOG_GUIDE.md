# 博客文章编写指南 / Blog Writing Guide

## 📝 如何添加新博客文章

所有博客文章都统一管理在 `data/blog.ts` 文件中。添加新文章非常简单：

### 步骤 1: 打开 `data/blog.ts` 文件

找到 `blogPosts` 数组，这是所有博客文章的列表。

### 步骤 2: 添加新文章对象

在数组开头（或你想要的位置）添加一个新的文章对象：

```typescript
{
  slug: 'your-article-slug',           // URL 路径，使用小写和连字符
  title: 'Your Article Title',         // 文章标题
  date: '2025-01-20',                   // 发布日期 (YYYY-MM-DD)
  summary: 'Brief summary...',          // 简短摘要（显示在列表页）
  content: `                           // 文章内容（HTML 格式）
    <p>第一段内容...</p>
    <p>第二段内容...</p>
    <h2>小标题</h2>
    <p>更多内容...</p>
    <ul>
      <li>列表项 1</li>
      <li>列表项 2</li>
    </ul>
  `,
}
```

### 步骤 3: 重要注意事项

1. **slug（URL 路径）**：
   - 使用小写字母
   - 单词之间用连字符 `-` 分隔
   - 例如：`my-new-article`，`urban-ai-insights`

2. **日期格式**：
   - 使用 `YYYY-MM-DD` 格式
   - 例如：`2025-01-20`

3. **内容格式**：
   - 使用 HTML 标签
   - 常用标签：
     - `<p>` - 段落
     - `<h2>`, `<h3>` - 小标题
     - `<ul>`, `<ol>` - 列表
     - `<li>` - 列表项
     - `<strong>` - 粗体
     - `<em>` - 斜体
     - `<a href="...">` - 链接
   - **重要**：HTML 中的引号需要转义：
     - 单引号 `'` → `&apos;`
     - 双引号 `"` → `&quot;`

4. **文章顺序**：
   - 文章会按日期自动排序（最新的在前）
   - 你可以在数组中的任何位置添加，排序会自动处理

### 示例：添加一篇新文章

```typescript
{
  slug: 'city-routes-launch',
  title: 'Introducing City Routes: Experience-Based Navigation',
  date: '2025-01-25',
  summary: 'We&apos;re excited to launch City Routes, our new routing system that prioritizes comfort, safety, and green spaces over shortest distance.',
  content: `
    <p>Today marks an important milestone for CityExperience.AI. We&apos;re launching City Routes, a revolutionary routing system that changes how people navigate cities.</p>
    
    <h2>Why Experience-Based Routing?</h2>
    
    <p>Traditional navigation apps focus on one thing: getting you from point A to point B as quickly as possible. But cities are more than just networks of roads—they&apos;re environments that shape our daily experiences.</p>
    
    <p>City Routes considers multiple factors:</p>
    <ul>
      <li><strong>Comfort:</strong> Quieter streets, pedestrian-friendly paths</li>
      <li><strong>Safety:</strong> Well-lit areas, lower crime rates</li>
      <li><strong>Green spaces:</strong> Routes through parks and tree-lined streets</li>
    </ul>
    
    <h2>How It Works</h2>
    
    <p>Our algorithms analyze urban data from multiple sources to create routes that prioritize human experience. By combining geospatial reasoning with urban analytics, we can suggest paths that are not just efficient, but also pleasant and safe.</p>
    
    <p>Try it out and let us know what you think!</p>
  `,
}
```

### 支持的 HTML 标签

- **段落和标题**：`<p>`, `<h2>`, `<h3>`, `<h4>`
- **列表**：`<ul>`, `<ol>`, `<li>`
- **文本格式**：`<strong>`, `<em>`, `<code>`
- **链接**：`<a href="url">text</a>`
- **换行**：`<br />`

### 常见问题

**Q: 如何添加图片？**
A: 目前暂不支持图片。如果需要，可以将图片放在 `public/blog/` 文件夹，然后使用 `<img src="/blog/image.jpg" alt="描述" />`。

**Q: 文章会自动排序吗？**
A: 是的，文章会按日期自动排序，最新的文章显示在最前面。

**Q: 可以添加代码块吗？**
A: 可以使用 `<code>` 标签，或者用 `<pre><code>...</code></pre>` 包裹多行代码。

**Q: slug 可以包含中文吗？**
A: 建议使用英文，因为 slug 会出现在 URL 中。如果需要中文标题，可以放在 `title` 字段。

---

## 🚀 添加文章后的操作

1. 保存 `data/blog.ts` 文件
2. 本地测试：运行 `npm run dev` 查看效果
3. 提交更改：`git add data/blog.ts && git commit -m "Add new blog post" && git push`

文章会自动出现在博客列表页，并可以通过 `/blog/your-article-slug` 访问！

