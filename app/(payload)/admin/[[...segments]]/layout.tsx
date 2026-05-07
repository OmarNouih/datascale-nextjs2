import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import config from '../../../../payload.config'
import { importMap } from '../importMap'
import { serverFunction } from '../actions'
import React from 'react'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) =>
  RootLayout({ config, importMap, serverFunction, children })

export default Layout
