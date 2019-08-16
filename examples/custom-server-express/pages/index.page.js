import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link href="/blog/[pid]" as="/blog/a">
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href="/blog/[pid]" as="/blog/b">
        <a>b</a>
      </Link>
    </li>
    <li>
      <Link href="/blog">
        <a>Blog index</a>
      </Link>
    </li>
  </ul>
)
