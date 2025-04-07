import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper flex justify-between items-center ">
        <div className="title">
            <h1>Have an Idea?</h1>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/ManojSravan">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://linkedin.com/in/manojsravan">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://x.com/manojsravan19">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="mailto:workwithmanojsravan@gmail.com">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div> 
      </div>
    </>
  )
}
export default Footer