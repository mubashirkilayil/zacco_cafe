import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const PageNotFound = () => {
  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg-muted'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>404</h1>
            <p className='text-lg'>Oops! Page Not Found</p>
            <p className='text-sm text-muted-foreground'>The page you are looking for does not exist.</p>
            <Button variant='outline' className='mt-4'>
                <Link to='/' className='text-blue-500'>Go to Home</Link>
            </Button>
        </div>
    </div>
    </>
  )
}

export default PageNotFound