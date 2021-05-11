import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), '_content');

export function getAllPosts() {

    const allPosts = fs.readdirSync(contentDirectory);

    return allPosts.map(fileName => {
        const slug = fileName.replace('.md', '')
        const fileContents = fs.readFileSync(
            path.join(contentDirectory, fileName), 'utf8'
        );
        const { data, content } = matter(fileContents);

        return {
            data,
            content,
            slug
        }
    })
}

const blogOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const blogProfilePictures = {
    Dan: "/./blog/dan-profile.png",
    Rich: "/./blog/rich-profile.png"
}

// export const blogPosts = [
//     {
//         title: `My first blog post`,
//         slug: 'first-post',
//         date: new Date(2018, 11, 24).toLocaleDateString("en-GB", blogOptions),
//         img: "/./blog/jobs-post.png",
//         categories: ["jobs"],
//         content: "1111111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut pharetra tortor. Aenean eu blandit felis. Sed lobortis enim non ultricies consectetur. Phasellus nec dui nisl. Fusce nec mollis neque. Praesent cursus est nec ex interdum viverra. Praesent nec egestas eros. Donec mollis velit vitae tellus semper, ut interdum nisi elementum. Praesent ut mauris eget tellus congue fringilla vel non libero. Etiam consequat massa pellentesque quam posuere, id gravida mauris posuere. Morbi venenatis vitae nisi ut vulputate. Aliquam faucibus id erat eu pellentesque. Suspendisse egestas metus sed nibh commodo laoreet. Proin ac nisl et neque tempor varius eget non neque. Nunc at vestibulum dolor, pellentesque iaculis magna.",
//         author: "Rich",
//         profilePicture: blogProfilePictures.Rich
//     },
//     {
//         title: `My second blog post`,
//         slug: 'second-post',
//         date: new Date(2018, 11, 24).toLocaleDateString("en-GB", blogOptions),
//         img: "/./blog/website-post.png",
//         categories: ["news"],
//         content: "2222222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut pharetra tortor. Aenean eu blandit felis. Sed lobortis enim non ultricies consectetur. Phasellus nec dui nisl. Fusce nec mollis neque. Praesent cursus est nec ex interdum viverra. Praesent nec egestas eros. Donec mollis velit vitae tellus semper, ut interdum nisi elementum. Praesent ut mauris eget tellus congue fringilla vel non libero. Etiam consequat massa pellentesque quam posuere, id gravida mauris posuere. Morbi venenatis vitae nisi ut vulputate. Aliquam faucibus id erat eu pellentesque. Suspendisse egestas metus sed nibh commodo laoreet. Proin ac nisl et neque tempor varius eget non neque. Nunc at vestibulum dolor, pellentesque iaculis magna.",
//         author: "Dan",
//         profilePicture: blogProfilePictures.Dan
//     },
//     {
//         title: `My third blog post`,
//         slug: 'third-post',
//         date: new Date(2018, 11, 24).toLocaleDateString("en-GB", blogOptions),
//         img: "/./blog/kit-post.png",
//         categories: ["advice"],
//         content: "3333333 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut pharetra tortor. Aenean eu blandit felis. Sed lobortis enim non ultricies consectetur. Phasellus nec dui nisl. Fusce nec mollis neque. Praesent cursus est nec ex interdum viverra. Praesent nec egestas eros. Donec mollis velit vitae tellus semper, ut interdum nisi elementum. Praesent ut mauris eget tellus congue fringilla vel non libero. Etiam consequat massa pellentesque quam posuere, id gravida mauris posuere. Morbi venenatis vitae nisi ut vulputate. Aliquam faucibus id erat eu pellentesque. Suspendisse egestas metus sed nibh commodo laoreet. Proin ac nisl et neque tempor varius eget non neque. Nunc at vestibulum dolor, pellentesque iaculis magna.",
//         author: "Dan",
//         profilePicture: blogProfilePictures.Dan
//     },
//     {
//         title: `My fourth blog post`,
//         slug: 'fourth-post',
//         date: new Date(2018, 11, 24).toLocaleDateString("en-GB", blogOptions),
//         img: "/./blog/intro-post.png",
//         categories: ["advice"],
//         content: "3333333 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut pharetra tortor. Aenean eu blandit felis. Sed lobortis enim non ultricies consectetur. Phasellus nec dui nisl. Fusce nec mollis neque. Praesent cursus est nec ex interdum viverra. Praesent nec egestas eros. Donec mollis velit vitae tellus semper, ut interdum nisi elementum. Praesent ut mauris eget tellus congue fringilla vel non libero. Etiam consequat massa pellentesque quam posuere, id gravida mauris posuere. Morbi venenatis vitae nisi ut vulputate. Aliquam faucibus id erat eu pellentesque. Suspendisse egestas metus sed nibh commodo laoreet. Proin ac nisl et neque tempor varius eget non neque. Nunc at vestibulum dolor, pellentesque iaculis magna.",
//         author: "Rich",
//         profilePicture: blogProfilePictures.Rich
//     }
// ]