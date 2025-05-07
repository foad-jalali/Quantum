"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function BlogPostGrid({ posts }: { posts: any[] }) {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
        >
            {posts.map((post, i) => (
                <motion.div
                    key={post.id}
                    className="bg-white backdrop-blur-sm border border-[#00204E]/10 rounded-lg overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="relative overflow-hidden">
                        <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={640}
                            height={360}
                            className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <Link href={`/blog/${post.slug}`} className="block group">
                        <div className="p-6 cursor-pointer">
                            <p className="text-[#00204E] text-sm mb-2">{post.date}</p>
                            <h3 className="text-xl font-bold mb-2 text-[#00204E] group-hover:text-amber-600 transition-colors">{post.title}</h3>
                            <p className="text-base text-[#00204E] mb-2 group-hover:text-amber-600 transition-colors">
                                {post.short_description}
                            </p>
                            <p className="text[#00204E] mb-4">{post.excerpt}</p>
                            <span className="text-[#00204E] hover:text-amber-600 inline-flex items-center">
                                Read More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </div>
                    </Link>

                </motion.div>
            ))}
        </motion.div>
    );
}